import { useStripe, useElements, PaymentElement, PaymentRequestButtonElement } from "@stripe/react-stripe-js";
import { Toast } from "primereact/toast";
import { useEffect, useRef, useState } from "react";

const CheckoutForm = ({ course_id, Lang }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentRequest, setPaymentRequest] = useState(null);
  // const [messages, addMessage] = useMessages();
  const [disabel, setDisabel] = useState(false);
  // const { t } = useTranslation();
  const toast = useRef(null);
  const EMptyInput = (mess) => {
    toast.current.show({
      severity: "error",
      summary: `${mess}`,
      // life: 3000,
    });
  };
  const show = (e) => {
    toast.current.show({
      severity: "success",
      summary: e,
      // detail: formik.values.value,
    });
  };
  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();
    setDisabel(true);
    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/${Lang}/user/payment/confirm/${course_id}`,
      },
    });

    if (result.error) {
      // Show error to your customer (for example, payment details incomplete)
      EMptyInput(result.error.message);
      setDisabel(false);
    } else {
      // console.log(result)
      show("Payment success");
      setDisabel(false);
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
    }
  };

  useEffect(() => {
    if (!stripe || !elements) {
      return;
    }

    const pr = stripe.paymentRequest({
      country: "US",
      currency: "usd",
      total: {
        label: "Demo total",
        amount: 1999,
      },
      requestPayerName: true,
      requestPayerEmail: true,
    });

    // Check the availability of the Payment Request API.
    pr.canMakePayment().then((result) => {
      if (result) {
        setPaymentRequest(pr);
      }
    });

    pr.on("paymentmethod", async (e) => {
      const { error: backendError, clientSecret } = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: ["card", "applepay"],
          currency: "usd",
        }),
      }).then((r) => r.json());

      if (backendError) {
        // addMessage(backendError.message);
        return;
      }

      // addMessage("Client secret returned");

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: e.paymentMethod.id,
        },
        { handleActions: false }
      );

      if (stripeError) {
        // Show error to your customer (e.g., insufficient funds)
        // addMessage(stripeError.message);
        return;
      }

      // Show a success message to your customer
      // There's a risk of the customer closing the window before callback
      // execution. Set up a webhook or plugin to listen for the
      // payment_intent.succeeded event that handles any business critical
      // post-payment actions.
      // addMessage(`Payment ${paymentIntent.status}: ${paymentIntent.id}`);
    });
  }, [stripe, elements]);

  return (
    <div>
      <Toast ref={toast} />
      <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
        <PaymentElement />
        {paymentRequest && <PaymentRequestButtonElement options={{ paymentRequest }} />}

        {/* <StatusMessages messages={messages} /> */}
        <button disabled={!stripe} className={`submit-button ${disabel && "LoadingButton"}`}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;

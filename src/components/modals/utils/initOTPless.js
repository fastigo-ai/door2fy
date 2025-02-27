export const initOTPless = (callback) => {
    if (!window.otpless) {
      const script = document.createElement("script");
      script.id = "otpless-sdk";
      script.type = "text/javascript";
      script.src = "https://otpless.com/v2/auth.js";
      script.setAttribute("data-appid", "67UHR8QORYI44NIGG7VD");
  
      script.onload = () => {
        
        window.otpless = callback;
      };
  
      document.body.appendChild(script);
    } else {
      window.otpless = callback;
    }
  };
  
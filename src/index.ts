const thisEl = document.querySelector("script"); // TODO scope to the correct src attr
const IFRAME_STYLE_ACTIVE =
  "z-index: 2147483647; background: rgba(0, 0, 0, 0.004); border: 0px none transparent; overflow: hidden auto; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;";
const IFRAME_STYLE_INACTIVE =
  "z-index: 2147483647; display: none; background: rgba(0, 0, 0, 0.004); border: 0px none transparent; overflow: hidden auto; visibility: visible; margin: 0px; padding: 0px; -webkit-tap-highlight-color: transparent; position: fixed; left: 0px; top: 0px; width: 100%; height: 100%;";

function createIframe() {
  // const iframeSrc = "https://tools.juicebox.money/embed/pay";
  //   const iframeSrc = "https://juice-tools-embed-pay.netlify.app/";
  const iframeSrc = "http://localhost:3000/";

  const iframe = document.createElement("iframe");

  iframe.setAttribute("style", IFRAME_STYLE_INACTIVE);
  iframe.setAttribute("src", iframeSrc);

  return iframe;
}

function createButton(iframe: HTMLIFrameElement) {
  const button = document.createElement("button");
  button.innerText = "Pay with Juicebox";

  button.addEventListener("click", function juiceboxButtonClick() {
    iframe.setAttribute("style", IFRAME_STYLE_ACTIVE);
  });

  return button;
}

function mount() {
  const iframe = createIframe();
  const button = createButton(iframe);

  thisEl?.insertAdjacentElement("afterend", iframe);
  thisEl?.insertAdjacentElement("beforebegin", button);
}

mount();

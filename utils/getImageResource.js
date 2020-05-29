/* eslint-disable require-jsdoc */
const fetchImage = async (url) => {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const base64Flag = "data:image/jpeg;base64,";
  const imageStr = arrayBufferToBase64(buffer);
  return base64Flag + imageStr;
};

const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = [].slice.call(new Uint8Array(buffer));

  bytes.forEach((b) => (binary += String.fromCharCode(b)));

  return window.btoa(binary);
};

const getImageResource = (url) => {
  let status = "pending";
  let result = undefined;

  const suspender = fetchImage(url).then(
    (image) => {
      status = "success";
      result = image;
    },
    (error) => {
      status = "error";
      result = error;
    }
  );

  return {
    read() {
      switch (status) {
        case "pending":
          throw suspender;
        case "error":
          throw result;
        case "success":
          return result;
      }
    },
  };
};

export default getImageResource;

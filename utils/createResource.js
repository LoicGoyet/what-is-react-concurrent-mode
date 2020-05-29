/* eslint-disable require-jsdoc */

const createResource = (fetch) => {
  let status = "pending";
  let result = undefined;

  const suspender = fetch().then(
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

export default createResource;

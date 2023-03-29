import { QrReader } from "react-qr-reader";

const Index = () => {
  return (
    <QrReader
      onResult={(result, error) => {
        if (!!result) {
          console.log(result);
        }
      }}
      constraints={{ facingMode: "user" }}
    />
  );
};

export default Index;

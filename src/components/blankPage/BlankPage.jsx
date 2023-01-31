import Typed from "react-typed";

const BlankPage = ({ blankInfo }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "200px",
          flexDirection: "column",
        }}
      >
        <Typed
          strings={[
            ".......ooops..... we are sorry this page is in progress.......",
          ]}
          typeSpeed={50}
          backSpeed={90}
          style={{ color: "red", fontSize: "24px", marginBottom: "40px" }}
          loop
        />
        <p> {blankInfo}</p>
      </div>
    </div>
  );
};

export default BlankPage;

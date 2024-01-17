const styles = {
    buttons: {
      backgroundColor: "white",
      color: "black",
      borderRadius: "10px",
      fontWeight: "bold",
      textTransform: "none",
      height: "48px",
    },
    bgImageStyle: {
      display: "flex",
      flexDirection: "column",
      zIndex: -1,
      backgroundImage: `url(${process.env.PUBLIC_URL}/image/gradient.png)`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "240px",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: "60px",
    },
    h1Styles: {
      color: "white",
      fontWeight: "bold",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize:"42px",
    },
    cotegoriesStyles: {
      width: "98%",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      gridTemplateColumns: "repeat(10, 460px)",
    },
    pageContainerStyle: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      width: "100%",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 2,
      position: "absolute",
      top: "230px",
      left: 0,
    },
    cardStyle: {
      maxWidth: 380,
      borderRadius: "10px",
      height: "600px",
      position: "relative",
    },
    cardMediaStyle: {
      borderRadius: "10px",
    },
    cardactionStyles: {
      position: "absolute",
      top: "540px",
    },
    cardIcpnsStyles: {
      display: "flex",
      flexDirection: "row",
      gap: "8px",

    },
    iconsStyle: {
      display: "flex",
      alignItems:"center",
    },
    divider:{
      width:"60%",
    }
  };

  export default styles;
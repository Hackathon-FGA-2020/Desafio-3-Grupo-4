import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94d1cb",
  },
  productContainer: {
    marginTop: 10,
    justifyContent: "center",
    padding: 25,
    paddingBottom: 10,
  },
  productImage: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 200,
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
  },
  dataContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleProduct: {
    fontWeight: "bold",
    fontSize: 20,
  },
  localProduct: {
    fontWeight: "bold",
    color: "grey",
  },
  sellerProduct: {
    fontWeight: "bold",
    color: "grey",
  },
  priceProduct: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContainer: {
    marginTop: 15,
    padding: 15,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#b8e0dc",
    borderWidth: 3,
    borderColor: "#3d8f87",
  },
  descriptionText: {
    textAlign: "justify",
    color: "#333333",
    fontWeight: "bold",
  },
  buttonBag: {
    elevation: 5,
    borderRadius: 5,
    marginTop: 15,
    backgroundColor: "#836FFF",
    marginHorizontal: 50,
    alignItems: "center",
    padding: 15,
  },
});

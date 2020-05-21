import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2194BF",
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
    color: "#161925",
    fontWeight: "bold",
    fontSize: 20,
  },
  localProduct: {
    fontWeight: "bold",
    color: "#161925",
  },
  sellerProduct: {
    fontWeight: "bold",
    color: "#161925",
  },
  priceProduct: {
    fontSize: 20,
    color: "#161925",
    fontWeight: "bold",
    textAlign: "center",
  },
  descriptionContainer: {
    marginTop: 15,
    padding: 15,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: "#CBF7ED",
    borderWidth: 3,
    borderColor: "#191919",
  },
  descriptionText: {
    textAlign: "justify",
    color: "#333333",
    fontWeight: "bold",
  },
  buttonBag: {
    alignSelf: "center",
    bottom: 40,
    position: "absolute",
    elevation: 5,
    borderRadius: 5,
    backgroundColor: "#161925",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "#00000070",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPopUpBox: {
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  modalPopUpText: {
    marginBottom: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    backgroundColor: "#161925",
    padding: 8,
    elevation: 5,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  modalButtonText: {
    textAlign: "center",
    color: "#CBF7ED",
  },
  inputqtd: {
    textAlign: "center",
    backgroundColor: '#FFF',
    marginBottom: 4,
    color: '#191919',
    fontSize: 17,
    padding: 8,
    marginBottom: '5%',
    borderWidth: 1.5,
    borderRadius: 10,
  },

});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2194BF',
  },
  topContainer: {
    marginTop: 10,
    justifyContent: "center",
    padding: 25,
    paddingBottom: 10,
  },
  categoryImage: {
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    height: 200,
    backgroundColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
  },
  titleCategory: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#161925",
    textAlign: "center",
    marginBottom: 10,
  },
  orderByTitle: {
    fontWeight: "bold",
    fontSize: 10,
    textAlign: "left",
    marginHorizontal: 20,
  },
  pickerContainer: {
    backgroundColor: "#f2f2f2",
    marginHorizontal: 20,
    borderRadius: 10,
    borderColor: "#d9d9d9",
    borderWidth: 3,
  },
  listContainer: {
    paddingTop: 5,
    justifyContent: "center",
    paddingBottom: 15,
  },
  productContainer: {
    elevation: 5,
    borderRadius: 10,
    flexDirection: "row",
    marginHorizontal: 25,
    marginBottom: 10,
    backgroundColor: "#f2f2f2",
    borderWidth: 3,
    borderColor: "#d9d9d9",
    padding: 20,
  },
  productImage: {
    borderRadius: 5,
    marginRight: 15,
    backgroundColor: "#d9d9d9",
    padding: 40,
  },
  productTextBox: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  titleProduct: {
    fontSize: 18,
    fontWeight: "bold",
  },
  localProduct: {
    fontWeight: "bold",
    color: "#808080",
    fontSize: 15,
  },
  priceProduct: {
    fontWeight: "bold",
    color: "#808080",
    fontSize: 15,
  },
});

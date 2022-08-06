import axios from "axios";

export default axios.create({
	baseURL: "https://api.thecatapi.com/v1",
	headers: { "x-api-key": "688311e2-5059-41b1-af99-d20113061881" }
});

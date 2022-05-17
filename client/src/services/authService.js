import $api from "../http/index";

class AuthService {
  async stepOne(phone) {
    return await $api
      .post("/auth/step1", { phone })
      .then((res) => res.data)
      .catch((e) => e.response.data);
  }

  async stepTwo(code) {
    return await $api
      .post("/auth/step2", { code })
      .then((res) => res.data)
      .catch((e) => e.response.data);
  }

  async logOut() {
    return await $api
      .post("/auth/logout")
      .then((res) => res.data)
      .catch((e) => e.response.data);
  }
}

export default new AuthService();

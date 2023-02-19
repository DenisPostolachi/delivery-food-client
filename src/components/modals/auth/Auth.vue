<script>
export default {
  name: "AuthModal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<template>
  <div class="modal-auth" @click.self="closeModal">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="closeModal">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text" />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password" />
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">
              Войти
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-auth {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.modal-dialog {
  max-width: 780px;
  width: 95%;
  background: #ffffff;
  border-radius: 5px;
  margin: auto;
  padding: 40px 45px;
}

.modal-dialog-auth {
  width: auto;
  position: relative;
}

.label-auth {
  display: block;
  margin: 30px;
}

.close-auth {
  font-size: 36px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 20px;
}

.modal-body {
  margin-bottom: 22px;
}

.modal-title {
  margin: 0;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
}

.label-auth {
  display: block;
  margin: 30px;
}

.label-auth span {
  width: 80px;
  display: inline-block;
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.modal-auth .modal-footer {
  justify-content: flex-end;
}

.footer-buttons {
  display: flex;
  align-items: center;
}

.button {
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.0015);
  border-radius: 2px;
  color: #595959;
  font-size: 16px;
  line-height: 24px;
}

.button:hover {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
}

.button-primary {
  background: #1890ff;
  border: 1px solid #1890ff;
  color: #fff;
  margin-right: 10px;
}

.button-primary:hover {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  color: #595959;
}
</style>

<template>
    <form action="" @submit="onSubmit">
        <h1>Welcome to DebtGo</h1>

        <div class="form__labels-container">
            <h2>Register</h2>
            <pv-float-label>
                <pv-input-text v-model="name" size="large" @blur="onBlurName" :invalid="!isValidName" />
                <label>Name</label>
            </pv-float-label>

            <pv-float-label>
                <pv-input-text v-model="email" size="large" @blur="onBlurEmail" :invalid="!isValidEmail" />
                <label>Email</label>
            </pv-float-label>

            <pv-float-label>
                <pv-input-text v-model="role" size="large" @blur="onBlurRole" :invalid="!isValidRole" />
                <label>Role</label>
            </pv-float-label>

            <pv-float-label>
                <pv-password v-model="password" :feedback="false" :toggleMask="true" @blur="onBlurPassword"
                    :invalid="!isValidPassword" />
                <label>Password</label>
            </pv-float-label>

            <div class="form__checkbox-container">
                <pv-checkbox id="checkbox" v-model="checked" binary />
                <label>Accept the Terms and Conditions and Privacy Policy</label>
            </div>
        </div>


        <button type="submit">Register</button>
    </form>
</template>

<script>
import { AuthenticationApiService } from '../services/authentication-api.service';

export default {
    name: 'register-form',
    data() {
        return {
            name: '',
            isValidName: true,
            email: '',
            isValidEmail: true,
            password: '',
            isValidPassword: true,
            role: '',
            isValidRole: true,
            authenticationApi: new AuthenticationApiService()
        };
    },
    methods: {
        onSubmit(event) {
            event.preventDefault();
            this.authenticationApi.register(this.name, this.email, this.role, this.password)
                .then((response => {
                    if (response.status == 201)
                        alert('Account created.')
                    else
                        alert('Account not created.')
                }))
                .catch((e => alert('Error: ', e)));

        },
        onBlurName() {
            this.isValidName = this.name;
        },
        onBlurEmail() {
            this.isValidEmail = this.email;
        },
        onBlurRole() {
            this.isValidRole = this.role;
        },
        onBlurPassword() {
            this.isValidPassword = this.password;
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    background: #fff;
    font-family: Urbanist;
    width: 500px;
    padding-block: 40px;
    border-radius: 20px;
    margin-top: 200px;
    margin-inline: auto;
}

form h1 {
    color: #000;
    font-weight: 900;
}

form h2 {
    color: #000;
    font-weight: 700;
}

.form__labels-container {
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-self: start;
    margin-left: 50px;
    width: 80%;
}

.form__labels-container * {
    width: 100%;
}

.form__checkbox-container {
    display: flex;
    gap: 10px;
}

#checkbox {
    width: 20px;
}

form button {
    background: var(--morado);
    border: unset;
    width: 145px;
    height: 30px;
    color: #fff;
    font-family: Urbanist;
    border-radius: 9px;
    font-size: 14px;
    cursor: pointer;
}

form button:hover {
    transform: scale(105%);
}
</style>

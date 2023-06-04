<template>
    <div class="q-px-xl">
        <h5>Formulaire  {{login ? 'de connexion' :'d\'inscription'}}</h5>
        <q-form class="q-gutter-md" @submit.prevent="processLoginForm">
            <q-input v-if="register" label="Pseudo" v-model="pseudo">
            </q-input>
            
            <q-input label="Email" v-model='email'>
            </q-input>
            <q-input label="Mot de passe" v-model='password'>
            </q-input>
            <q-input label="Confirmer le mot de passe" v-model='passwordConfirm' v-if="register">
            </q-input>
            <q-btn
                color="primary"
                label="Connexion"
                type="submit"
                v-if="login"
            />
            <q-btn
                color="primary"
                label="Inscription"
                type="submit"
                v-if="register"
            />
            <q-btn
                color="primary"
                label="S'inscrire"
                @click="toggle"
                v-if="login"
            />
            <q-btn
                color="primary"
                label="Se connecter"
                @click="toggle"
                v-if="register"
            />
        </q-form>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {ref , getCurrentInstance} from 'vue';
    export default ({
        name: 'accessVue',
        setup(){
            const email = ref('');
            const password = ref('');
            const passwordConfirm = ref('');
            const login = ref(true);
            const register = ref(false);
            const pseudo = ref('');
            const toggle = function()  {
                login.value = !login.value;
                register.value = !register.value;
            }

            const auth = getAuth();


            const app = getCurrentInstance().appContext.app;
            
            const triggerWarning = function() {
                app.config.globalProperties.$q.notify({
                    color: 'negative',
                    position: 'top',
                    message: 'Veuillez remplir tous les champs',
                    icon: 'report_problem'
                })  ;
            };

            const processLoginForm = async function() {
                
                if (!email.value.trim() || !password.value.trim()) {
                    triggerWarning();
                    console.log('email et mot de passe requis');
                    return;
                }

                try {
                    if (login.value) {
                        await app.config.globalProperties.$auth.loginWithEmail(email.value, password.value);
                    } else {
                        if (password.value !== passwordConfirm.value) {
                            triggerWarning();
                            console.log('Les mots de passe ne correspondent pas');
                            return;
                        }
                        
                        const user  = await createUserWithEmailAndPassword(auth, email.value, password.value)
                        console.log(user);
                        // registerWithEmail(email.value, password.value);
                    }
                } catch (err) {
                    app.config.globalProperties.$q.notify({
                        color: 'negative',
                        position: 'top',
                        message: err.message,
                        icon: 'report_problem'
                    })  ;
                }
            }
            return {
                email,
                password,
                passwordConfirm,
                login,
                register,
                toggle,
                processLoginForm,
                
            }
        }
    });
</script>
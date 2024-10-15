/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

document.addEventListener('deviceready', onDeviceReady, false);

let users = {
    "usuari_inicial": "contrasenya_inicial" // Usuari i contrasenya predeterminats
};

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');

    // Asigna los eventos de clic a los botones de login y registro
    document.querySelector("button[onclick='login()']").addEventListener('click', login);
    document.querySelector("button[onclick='register()']").addEventListener('click', register);
}

// Función de login
function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    if (users[username] && users[username] === password) {
        document.getElementById("loginMessage").innerText = "Login correcte!";
    } else {
        document.getElementById("loginMessage").innerText = "Nom d'usuari o contrasenya incorrectes.";
    }
}

// Función de registre
function register() {
    const email = document.getElementById("registerEmail").value;
    const username = document.getElementById("registerUsername").value;
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (users[username]) {
        document.getElementById("registerMessage").innerText = "L'usuari ja existeix.";
    } else if (password !== confirmPassword) {
        document.getElementById("registerMessage").innerText = "Les contrasenyes no coincideixen.";
    } else {
        users[username] = password;
        document.getElementById("registerMessage").innerText = "Registre complet! Ja pots iniciar sessió.";
    }
}

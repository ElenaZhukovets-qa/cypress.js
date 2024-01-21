describe('Проверка логина и пароля', function () {

     it('Поиск сайта', function () {
        cy.visit('https://login.qa.studio/');
        })
     it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#messageHeader').should('be.visible'); // Элемент должне быть видим
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совпадение текста
     })   
     it('Проверка логики восстановления пароля', function () {
     	cy.visit('https://login.qa.studio/');
     	cy.get('#forgotEmailButton').click(); // Нажать "Забыли пароль"
     	cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввести мейл
     	cy.get('#restoreEmailButton').click(); // Нажать "Отправить код"
     	cy.get('#message').should('be.visible'); // Элемент видим
     	cy.get('#message').contains('Успешно отправили пароль на e-mail'); // Совпадение текста
     	cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден 
    })
     it('Негативный кейс - неверный пароль', function () {
     	cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('dkslcm'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#message').should('be.visible'); // Элемент видим
     	cy.get('#message').contains('Такого логина или пароля нет'); // Совпадение текста
     	cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден 
    })
     it('Негативный кейс - неверный логин', function () {
     	cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('ndjo@yahoo.com'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#message').should('be.visible'); // Элемент видим
     	cy.get('#message').contains('Такого логина или пароля нет'); // Совпадение текста
     	cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден 
    })
     it('Негативный кейс валидации', function () {
     	cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#message').should('be.visible'); // Элемент видим
     	cy.get('#message').contains('Нужно исправить проблему валидации'); // Совпадение текста  
    })
     it('Проверка на приведение к строчным буквам в логине', function () {
     	cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали "Войти"
        cy.get('#messageHeader').should('be.visible'); // Элемент должне быть видим
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Крестик виден 
      
    })
})
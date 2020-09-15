describe('test_name', function() {

 it('what_it_does', function() {
 
    cy.visit('http://localhost:8080/static/home')
 
    cy.get('.container > .row > .col-12 > .form > #usernameInput').click()
 
    cy.get('.container > .row > .col-12 > .form > #usernameInput').type('unusuario')
 
    cy.get('[type="email"]').type('uncorreo@hotmail.com')
 
    cy.get('[placeholder="Contraseña"]').type('12345678')  
 
    cy.get('[placeholder="Confirma contraseña"]').type('12345678')
 
    cy.get('.container > .row > .col-12 > .form > .btn').click()
 
    cy.visit('http://localhost:8080/')
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > div > .row > .btn').click()
 
    cy.get('.section > #body > .sub-menu > .sub-menu-item:nth-child(2) > strong').click()
 
    cy.get('div > .customize-options > .outer-option-background > .option > .slim_shirt_white').click()
 
    cy.get('.section > #options-nav > .row > .menu-container:nth-child(2) > .menu-item').click()
 
    cy.get('#skin > .customize-options > .outer-option-background > .option > .skin_f5a76e').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > #options-nav > .row > .menu-container:nth-child(3)').click()
 
    cy.get('#hair-color > .customize-options > .outer-option-background > .option > .hair_bangs_1_white').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > #hair > .sub-menu > .sub-menu-item:nth-child(3)').click()
 
    cy.get('.customize-options > .outer-option-background > .option > .sprite > .redline-outer').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > #hair > .sub-menu > .sub-menu-item:nth-child(2)').click()
 
    cy.get('#bangs > .customize-options > .outer-option-background > .option > .hair_bangs_3_white').click()
 
    cy.get('.section > #options-nav > .row > .menu-container:nth-child(4) > .menu-item').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > .footer-right > .next-outer > .next').click()
 
    cy.get('.section > .col-6:nth-child(1) > .task-option:nth-child(1) > .custom-control > .custom-control-label').click()
 
    cy.get('.section > .col-6:nth-child(2) > .task-option:nth-child(1) > .custom-control > .custom-control-label').click()
 
    cy.get('.container > .section > .col-6:nth-child(1) > .task-option:nth-child(3) > .custom-control').click()
 
    cy.get('.section > .col-6:nth-child(1) > .task-option:nth-child(3) > .custom-control > .custom-control-label').click()
 
    cy.get('.section > .col-6 > .task-option:nth-child(4) > .custom-control > .custom-control-label').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > .footer-right > .next-outer > .next').click()
 
    cy.get('body > .introjs-tooltipReferenceLayer > .introjs-tooltip > .introjs-tooltipbuttons > .btn').click()
 
    cy.get('#menu_collapse > .form-inline > .habitica-menu-dropdown:nth-child(3) > .habitica-menu-dropdown-toggle > div > div > .top-menu-icon > svg').click()
 
    cy.get('#menu_collapse > .form-inline > .habitica-menu-dropdown > .dropdown-menu > .user-dropdown > .topbar-dropdown-item:nth-child(9)').click()
 
    cy.visit('http://localhost:8080/static/home')
 
    cy.get('div > #app > div > .navbar > .btn').click()
 
    cy.get('#app > .form-wrapper > #login-form > .form-group > #usernameInput').click()
 
    cy.get('#app > .form-wrapper > #login-form > .form-group > #usernameInput').type('unusuario')
 
    cy.get('#app > .form-wrapper > #login-form > .form-group > #passwordInput').click()
 
    cy.get('#app > .form-wrapper > #login-form > .form-group > #passwordInput').type('12345678')
 
    cy.get('#app > .form-wrapper > #login-form > .text-center > .btn').click()
 
    cy.visit('http://localhost:8080/')
 
   cy.get('.col-12 > .row > .habit > .tasks-list > .quick-add').click().type('unHabito{enter}')
 
    cy.get('.col-12 > .row > .daily > .tasks-list > .quick-add').click().type('unaTarea{enter}')
 
    cy.get('.col-12 > .row > .todo > .tasks-list > .quick-add').click().type('unPendiente{enter}')
 
    cy.get('.col-12 > .row > .reward > .tasks-list > .quick-add').click().type('unaRecompensa{enter}')
 
    cy.get('.tasks-column:nth-child(1) > .tasks-list > .sortable-tasks > .task-wrapper:nth-child(1) > .task > .d-flex > .left-control > .task-control').click()
 
    cy.get('.daily > .tasks-list > .sortable-tasks > :nth-child(1) > .task > :nth-child(1) > .left-control > .task-control').click()
 
    cy.get('.modal-dialog > #first-drops___BV_modal_content_ > #first-drops___BV_modal_body_ > .text-center > .btn').click()
 
    cy.get('.nav > [href="/inventory/equipment"]').click()
 
    cy.get('.container-fluid > .sticky > .row > .nav > .nav-link:nth-child(2)').click()
 
    cy.get('.headAccessory > .item-rows > .items > :nth-child(1)').click()

    cy.get('.inner-content > .btn').click()
   
    cy.get('.desktop-only > .item-user > .habitica-menu-dropdown-toggle > div > div').click()
 
    cy.get('#menu_collapse > .form-inline > .habitica-menu-dropdown > .dropdown-menu > .user-dropdown > .topbar-dropdown-item > .small-text').click()
 
    cy.get('.section > #body > .sub-menu > .sub-menu-item:nth-child(2) > strong').click()
 
    cy.get('div > .customize-options > .outer-option-background > .option > .slim_shirt_black').click()
 
    cy.get('.row > .menu-container:nth-child(2) > .menu-item > .svg-icon > svg').click()
 
    cy.get('#skin > .customize-options > .outer-option-background > .option > .skin_98461a').click()
 
    cy.get('.section > #options-nav > .row > .menu-container:nth-child(3) > .menu-item').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > #hair > .sub-menu > .sub-menu-item:nth-child(4)').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > #hair > .sub-menu > .sub-menu-item:nth-child(3)').click()
 
    cy.get('div > .customize-options > .outer-option-background > .option > .hair_base_3_white').click()
 
    cy.get('.section > #hair > .sub-menu > .sub-menu-item:nth-child(2) > strong').click()
 
    cy.get('#bangs > .customize-options > .outer-option-background > .option > .hair_bangs_1_white').click()
 
    cy.get('#options-nav > .row > .menu-container:nth-child(4) > .menu-item > .svg-icon').click()
 
    cy.get('#hair-color > .customize-options > .outer-option-background > .option > .eyewear_special_blackHalfMoon').click()
 
    cy.get('.section > #extra > .sub-menu > .sub-menu-item:nth-child(2) > strong').click()
 
    cy.get('#wheelchairs > .customize-options > .outer-option-background > .option > .button_chair_handleless_yellow').click()
 
    cy.get('.section > #extra > .sub-menu > .sub-menu-item:nth-child(3) > strong').click()
 
    cy.get('.section > #extra > #flowers > .customize-options > .outer-option-background:nth-child(12)').click()
 
    cy.get('.section > #extra > .sub-menu > .sub-menu-item:nth-child(4) > strong').click()
 
    cy.get('#avatar-modal___BV_modal_body_ > .section > #extra > .sub-menu > .sub-menu-item:nth-child(5)').click()
 
    cy.get('.section > #extra > .sub-menu > .sub-menu-item:nth-child(6) > strong').click()
 
    cy.get('#headband > .customize-options > .outer-option-background > .option > .headAccessory_special_blackHeadband').click()
 
    cy.get('.modal-dialog > #avatar-modal___BV_modal_content_ > #avatar-modal___BV_modal_body_ > .close-icon > svg').click()
 
    cy.get('.member-details > div > .avatar > .character-sprites > .hair_flower_11:nth-child(17)').click()
 
    cy.get('.profile > #userProfile > .row > .col-12 > .btn').click()
 
    cy.wait(1000)

    cy.get(':nth-child(2) > .form-control').type('unusuarioCambio')
 
    cy.get(':nth-child(2) > .text-center > .btn-primary').click()

 
 })

})

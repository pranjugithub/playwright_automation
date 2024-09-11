const { expect, test } = require('@playwright/test');

exports.HomePage = class HomePage {
    constructor(page) {
        this.page = page; // Initialize page object
        this.lblintroduction = '[class="fw-bold fs-2 fs-xl-1  ibmfont"]';
        this.btnBlockChain ='#navBlockchain';
        this.btnConnectNow = '(//button[@class="btn-4 buttonBorder"])[1]';
        this.nameTextField = '#firstName';
    }
 
    async getLblFromHomePage() {
       // Ensure btnDocs is visible and clickable
       const btnBlockChain = this.page.locator(this.btnBlockChain);
       await btnBlockChain.waitFor({ state: 'visible' }); 
       await btnBlockChain.click(); // Click the button

       // Wait for lblintroduction to be visible
       const locator = this.page.locator(this.lblintroduction);
       await locator.waitFor({ state: 'visible' }); 
       
       // Get the text content
       const text = await locator.textContent();
       console.log("Label:", text.trim()); 
       expect(text).toBe('Providing services to build the universe of blockchain');
    }

    async fillForm(){
        const btnBlockChain = this.page.locator(this.btnBlockChain);
        await btnBlockChain.waitFor({ state: 'visible' }); 
        await btnBlockChain.click(); // Click the button

        const locator = this.page.locator(this.btnConnectNow);
        await locator.click();
        const nameTextField = this.page.locator(this.nameTextField);
        await nameTextField.fill('John Doe');
        // await this.page.pause();
    }
};

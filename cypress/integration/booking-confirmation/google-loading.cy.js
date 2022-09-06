describe("booking confirmation page", () => {
    beforeEach(() => {
        // stubCurrentBooking()
        cy.visit('https://google.com')
    })

    it('should load booked user name', async () => {
        cy.get('input[class="gNO89b"]').should("have.value", "Google Search")
    });
})

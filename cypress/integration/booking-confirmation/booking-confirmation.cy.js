describe("booking confirmation page", () => {
    beforeEach(() => {
        // stubCurrentBooking()
        cy.visit('http://localhost:3000/bookingConfirmation')
    })

    it('should load booked user name', async () => {
        cy.get('input[id="firstName"]').should("have.value", "John")
    });
})

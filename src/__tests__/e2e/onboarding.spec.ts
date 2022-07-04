import {test, expect} from '@playwright/test'

test('Onboarding', async ({page}) => {
    await page.goto('http://localhost:3000/')
    const title = await page.title()
    expect(title).toEqual('ReactBris demo!')

    // Go to sign-up page
    await page.goto(`http://localhost:3000/sign-up`)

    // Fill email/password and sign up
    await page.fill('#email', 'bertrand@localhost')
    await page.fill('#password', 'pAsSw0Rd')
    await page.click('button')

    // Expect to be at the dashboard
    await page.waitForURL('**/dashboard')

    // Click the 'Log out' button
    await page.click('button')
    // Expect to be back a the root
    await page.waitForURL('**/')
})

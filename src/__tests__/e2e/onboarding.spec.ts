import {test, expect} from '@playwright/test'

test('Onboarding', async ({page}) => {
    await page.goto('http://localhost:3000/')
    const title = await page.title()
    expect(title).toEqual('Vite App')
})

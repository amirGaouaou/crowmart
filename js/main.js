import { isHomepage, getVisitorID, getUserAPIInfo }  from './lib/util.js'
import { getCartContent } from './lib/cartHelper.js'

const callBlackrowAI = async () => {
    const postData = async (data) => {
        const options = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch('https://api.sandbox.blackcrow.ai/v1/events/view', options)
        return response.json()
    }

    const ipInfo = await getUserAPIInfo()
    const data = {
        site_name: 'BLACKCROW',
        page_id: isHomepage() ? 'home' : 'other',
        visitor_id: getVisitorID(),
        page_url: window.location.href,
        page_referrer_url: document.referrer,
        site_country: 'CA',
        site_currency: 'CAD',
        page_title: document.title,
        visitor_ip_address: ipInfo.query,
        cart: getCartContent()
    }

    const result = await postData(data)
    console.log(result)
}

window.onload = callBlackrowAI()

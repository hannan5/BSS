{
    let cashbtn = document.getElementById('cashbtn')
    let remainobj = [{}]
    const Credit = () => {
        let amountinput = document.getElementById('amountinput').value
        let fivekInput = document.getElementById('fivekInput').value
        let hundredInput = document.getElementById('hundredInput').value;
        let fiftyInput = document.getElementById('fiftyInput').value;
        let twentyInput = document.getElementById('twentyInput').value;
        let tenInput = document.getElementById('tenInput').value
        let fiveInput = document.getElementById('fiveInput').value;
        let limit = 100000
        let small = 100
        if (amountinput >= limit || amountinput < small) {
            alert('Your Amount is not going to greater than 100K and not small than 100')
        }
        else {
            if (!fivekInput == '') {
                let b = Math.floor(fivekInput * 500)
                amountinput = amountinput - b
                remainobj.push({ value: fivekInput, curr: 500 })
            }
            else {
                let fiveK = Math.floor(amountinput / 500)
                amountinput = amountinput - fiveK * 500
                remainobj.push({ value: fiveK, curr: 500 })
            }
            if (!hundredInput == '') {
                let a = Math.floor(hundredInput * 100)
                amountinput = amountinput - a
                remainobj.push({ value: hundredInput, curr: 100 })
            }
            else {
                let hundred = Math.floor(amountinput / 100)
                amountinput = amountinput - hundred * 100
                remainobj.push({ value: hundred, curr: 100 })
            }
            if (!fiftyInput == '') {
                let c = Math.floor(fiftyInput * 50)
                amountinput = amountinput - c
                remainobj.push({ value: fiftyInput, curr: 50 })
            }
            else {
                let fifty = Math.floor(amountinput / 50)
                amountinput = amountinput - fifty * 50
                remainobj.push({ value: fifty, curr: 50 })
            }
            if (!twentyInput == '') {
                let d = Math.floor(twentyInput * 20)
                amountinput = amountinput - d
                remainobj.push({ value: twentyInput, curr: 20 })
            }
            else {
                let twenty = Math.floor(amountinput / 20)
                amountinput = amountinput - twenty * 20
                remainobj.push({ value: twenty, curr: 20 })
            }
            if (!tenInput == '') {
                let e = Math.floor(tenInput * 10)
                amountinput = amountinput - e
                remainobj.push({ value: tenInput, curr: 10 })
            }
            else {
                let ten = Math.floor(amountinput / 10)
                amountinput = amountinput - ten * 10
                remainobj.push({ value: ten, curr: 10 })
            }
            if (!fiveInput == '') {
                let f = Math.floor(fiveInput * 5)
                amountinput = amountinput - f
                remainobj.push({ value: fiveInput, curr: 5 })
            }
            else {
                let five = Math.floor(amountinput / 5)
                amountinput = amountinput - five * 5
                remainobj.push({ value: five, curr: 5 })
            }

            let one = Math.floor(amountinput / 1)
            amountinput = amountinput - one * 1
            remainobj.push({ value: one, curr: 1 })
            show(remainobj)
            // Credit()
        }
    }
    cashbtn.addEventListener('click', Credit)
    const show = () => {
        let currencydetail = document.getElementById('currencydetail')
        currencydetail.innerHTML = ''
        for (i = 1; i < remainobj.length; i++) {
            currencydetail.innerHTML += `
<h5 class='note'> Note ${remainobj[i].curr} : ${remainobj[i].value}</h5>
`
        }
    }
}

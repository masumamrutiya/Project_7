let bill = document.querySelector(".name")
    let service = document.querySelector(".form")
    let people = document.querySelector(".people")
    let btn = document.querySelector(".btn")
    let tip1 = document.querySelector(".tip-1")
    let tip2 = document.querySelector(".tip-2")
    let tip3 = document.querySelector(".tip-3")
    let tip4 = document.querySelector(".tip-4")

    let form = (e) => {
        e.preventDefault();

        if (bill.value.trim() === "") {
            alert("fill the bill")
        } else if (service.value == "Select") {
            alert("fill the service")
        } else if (people.value.trim() === "") {
            alert("fill the people")
        } else {

            let ans = (+bill.value) * (+service.value)
            let sum = ans / (+people.value)
            tip1.innerText = "TIP AMOUNT"
            tip2.innerText = "Rs."
            tip3.innerText = sum
            tip4.innerText = "Each"
            bill.value = "";
            service.value = "Select";
            people.value = "";
        }
    }

    btn.addEventListener("click", form)
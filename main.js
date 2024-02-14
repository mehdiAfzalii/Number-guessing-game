let secretNumber = Math.trunc(Math.random() * 20) + 1

let score = 20

let highScore = 0

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value)

    console.log(guess, typeof guess)

    if (!guess) {
        document.querySelector('.message').textContent = '⛔ No number'
    }
    else if (guess >= 0 && guess < 21) {
        if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉 Correct Number'
            document.querySelector('body').style.backgroundColor = '#60b347'
            document.querySelector('.number').style.width = '30rem'
            document.querySelector('.number').textContent = secretNumber
            if (score > highScore) {
                highScore = score
                document.querySelector('.highscore').textContent = highScore
            }
        }
        else if (guess > secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📈 Too high'
                score--
                document.querySelector('.score').textContent = score
            }
            else {
                document.querySelector('.message').textContent = 'You lost the game'
                document.querySelector('.score').textContent = 0
            }
        }
        else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message').textContent = '📉 Too low'
                score--
                document.querySelector('.score').textContent = score
            }
            else {
                document.querySelector('.message').textContent = 'You lost the game'
                document.querySelector('.score').textContent = 0
            }
        }
    }
    else {
        document.querySelector('.message').textContent = 'Please enter valid number...'
    }
})

document.querySelector('.again').addEventListener('click', function() {
    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})
document.addEventListener('DOMContentLoaded', () => {
    const boxes = document.querySelectorAll('.box');
    const restartButton = document.getElementById('restart-button');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);

    boxes.forEach((box, index) => {
        box.addEventListener('click', () => {
            if (box.innerText === '' && !checkWinner(board)) {
                box.innerText = currentPlayer;
                board[index] = currentPlayer;
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                if (checkWinner(board)) {
                    setTimeout(() => alert(`Player ${checkWinner(board)} wins!`), 100);
                }
            }
        });
    });

    restartButton.addEventListener('click', () => {
        board = Array(9).fill(null);
        boxes.forEach(box => box.innerText = '');
        currentPlayer = 'X';
    });


    function checkWinner(board) {
        const winningCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }
});

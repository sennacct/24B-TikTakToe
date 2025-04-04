let currentPlayer = 'X'; // Jogador inicial
let board = Array(9).fill(null); // Tabuleiro com 9 posições

// Captura nomes dos jogadores
document.getElementById('submit').onclick = () => {
    const player1Name = document.getElementById('player_name').value || 'Player 1';
    const player2Name = document.getElementById('player_name2').value || 'Player 2';
    document.getElementById('player_name_label1').textContent = player1Name;
    document.getElementById('player_name_label2').textContent = player2Name;
};


// Função para verificar vitória
const checkWin = () => {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ];
    return winPatterns.some(pattern => 
        board[pattern[0]] && 
        board[pattern[0]] === board[pattern[1]] && 
        board[pattern[1]] === board[pattern[2]]
    );
};

// Função para atualizar o tabuleiro
const updateBoard = (index) => {
    if (board[index] === null) {
        board[index] = currentPlayer;
        document.getElementById(`r${Math.floor(index / 3)}c${index % 3}`).textContent = currentPlayer;
        if (checkWin()) alert(`${currentPlayer} wins!`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Troca de jogador
    }
};

// Adiciona eventos de clique nas células
document.querySelectorAll('td').forEach((cell, index) => {
    cell.onclick = () => updateBoard(index);
});
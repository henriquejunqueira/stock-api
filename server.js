require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.FINNHUB_API_KEY;
const BASE_URL = 'https://finnhub.io/api/v1';

// Lista de ações populares
const DEFAULT_STOCKS = [
  'AAPL',
  'TSLA',
  'MSFT',
  'AMZN',
  'GOOG',
  'META',
  'NVDA',
  'AMD',
  'NFLX',
  'DIS',
  'BABA',
  'PYPL',
  'UBER',
  'TWTR',
  'INTC',
  'NVDA',
  'V',
  'CRM',
  'SNAP',
  'BA',
];

app.use(cors());
app.use(express.json());

// Rota para obter todas as ações populares
app.get('/stocks', async (req, res) => {
  try {
    const stockData = {};

    for (const symbol of DEFAULT_STOCKS) {
      const response = await axios.get(`${BASE_URL}/quote`, {
        params: {
          symbol,
          token: API_KEY,
        },
      });

      stockData[symbol] = response.data;
    }

    res.json(stockData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados das ações.' });
  }
});

// Rota para buscar uma ação específica
app.get('/stock/:symbol', async (req, res) => {
  try {
    const { symbol } = req.params;
    const response = await axios.get(`${BASE_URL}/quote`, {
      params: { symbol, token: API_KEY },
    });

    res.json({
      symbol,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados da ação.' });
  }
});

// Rota para listar todas as ações disponíveis na bolsa
app.get('/all-stocks', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/stock/symbol`, {
      params: {
        exchange: 'US',
        token: API_KEY,
      },
    });

    // Limitar a resposta a 20 ações
    const limitedStocks = response.data.slice(0, 30);

    res.json(limitedStocks);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar todas as ações.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

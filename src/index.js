const express = require('express');
const cors = require('cors');
const orderRoutes = require('./routes/order-routes');
const productRoutes = require('./routes/product-routes');
const userRoutes = require('./routes/user-routes');
const errorHandler = require('./middleware/errorHandler');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/orders', orderRoutes); 
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes); 

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





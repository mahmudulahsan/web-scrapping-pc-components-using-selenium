const express = require('express');
const cors = require('cors');
const techlandProcessorRoute = require('./routes/techlandProcessorRoute.js');
const techlandMotherboardRoute = require('./routes/techlandMotherboardRoute.js');
const techlandCpuCoolerRoute = require('./routes/techlandCpuCoolerRoute.js');
const techlandMonitorRoute = require('./routes/techlandMonitorRoute.js');
const techlandComputerCaseRoute = require('./routes/techlandComputerCaseRoute.js');
const techlandRamRoute = require('./routes/techlandRamRoute.js');
const techlandHddRoute = require('./routes/techlandHddRoute.js');
const techlandGpuRoute = require('./routes/techlandGpuRoute.js');
const techlandPsuRoute = require('./routes/techlandPsuRoute.js');

// const techlandKeyboardRoute = require('./routes/techlandKeyboardRoute.js');

// const startechProcessorRoute = require('./routes/startechProcessorRoute.js');

const app = express();
const port = 8800;
app.use(cors());

app.use('/techland/processor', techlandProcessorRoute);
app.use('/techland/motherboard', techlandMotherboardRoute);
app.use('/techland/cpu-cooler', techlandCpuCoolerRoute);
app.use('/techland/monitor', techlandMonitorRoute);
app.use('/techland/computer-case', techlandComputerCaseRoute);
app.use('/techland/ram', techlandRamRoute);
app.use('/techland/hdd', techlandHddRoute);
app.use('/techland/gpu', techlandGpuRoute);
app.use('/techland/psu', techlandPsuRoute);
// app.use('/startech/processor', startechProcessorRoute);
// app.use('/techland/keyboard', techlandKeyboardRoute);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
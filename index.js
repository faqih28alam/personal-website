// IMPORT MODULES
import express from 'express';                  // npm install express for server
import path from 'path';                        // npm install path for path
import pg from 'pg';                            // npm install pg for database
import multer from 'multer';                    // npm install multer for upload
import bcrypt from 'bcrypt';                    // npm install bcrypt for encrypt 
import hbs from 'hbs';                          // npm install hbs for handlebars
import session from 'express-session';          // npm install express-session for session
import flash from 'express-flash';              // npm install express-flash for flash message
import 'dotenv/config';                         // Load variables from .env

// SERVER SETUP
const app = express();
const PORT = process.env.PORT || 3000;          // Use .env port or default to 3000

// VIEW ENGINE CONFIGURATION (HBS)
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');                                          // Set view engine to hbs
app.set('views', path.join(__dirname, 'src/views'));                    // Set views directory
hbs.registerPartials(path.join(__dirname, 'src/views/partials'));       // Register partials directory

// SERVE STATIC FILES
app.use('/assets', express.static(path.join(__dirname, 'src/assets'))); // Serve static files from the "src/assets" directory
app.use(express.urlencoded({ extended: false }));                       // Parse form data from POST requests 


// ROUTES
app.get('/home', home);

// START SERVER
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


// FUNCTIONS
// Render home page
function home(req, res) {
    res.render('homePage');
}
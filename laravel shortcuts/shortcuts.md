⚙️ 1. PROJECT & ENVIRONMENT SETUP

cp .env.example .env
# Creates your environment config file.

php artisan key:generate
# Generates the app encryption key.

🗄️ 2. DATABASE & MIGRATIONS

php artisan migrate
# Runs all migrations → creates tables.

php artisan migrate:fresh
# Drops ALL tables and recreates them.

php artisan migrate:fresh --seed
# Resets DataBase + runs seeders.

php artisan make:migration create_orders_table
# Creates a migration file.

php artisan make:seeder UserSeeder
# Creates a seeder file.

php artisan db:seed
# Runs seeders.

🧠 3. MODELS & RELATIONS
php artisan make:model Product
# Creates a model.

php artisan make:livewire Chart
# make livewire component "Chart"

php artisan make:model Product -m
# Creates:
    Model
    Migration


php artisan make:model Product -mcr
# Creates:
    Model
    Migration
    Controller (resource)


🎮 4. CONTROLLERS (CRUD CORE)
php artisan make:controller ProductController
# Creates controller.

php artisan make:controller ProductController --resource
# Creates CRUD methods automatically:
    index
    create
    store
    show
    edit
    update
    destroy


🧾 5. FORM VALIDATION (VERY IMPORTANT FOR GRADING)
php artisan make:request StoreProductRequest
# Creates a FormRequest for validation.

🔐 6. AUTHENTICATION & ROLES
php artisan make:middleware RoleMiddleware
# Creates middleware for roles (admin, user, etc.)

👉 For roles (important):
You manually add:role: admin / user / seller


🧩 7. LIVEWIRE 
php artisan make:livewire ProductList
# Creates:
    Component class
    Blade view

🎨 8. FRONTEND / STYLING
npm install
# Installs frontend dependencies.

npm run dev
# Runs dev build (hot reload).

npm run build
# Production build.

🧹 9. CACHE & BUG FIXING (SUPER IMPORTANT)
php artisan view:clear
# Fixes: Blade not updating

php artisan cache:clear
# Fixes: App cache issues

php artisan config:clear
# Fixes: .env changes not applied

php artisan route:clear
# Fixes: route issues

🔥 Best combo:
php artisan optimize:clear
# Clears EVERYTHING.

📦 10. STORAGE & FILES
php artisan storage:link
# Links storage to public folder.

Why important:
    Images won’t work without this.

🔍 11. DEBUGGING
php artisan serve
# Runs local server.

dd($variable)
# Dump and die (debugging)

logger($data)
# Logs to storage/logs

🌱 12. SEEDING DEMO DATA (VERY USEFUL)
php artisan make:factory ProductFactory
# Creates fake data generator.

🧠 14. BEST COPILOT PROMPTS (HIGH VALUE)

Use these during exam:

🔹 CRUD SYSTEM

"Create a full Laravel CRUD system for products including migration, model, controller, validation, and Blade views"

🔹 ROLE SYSTEM

"Implement role-based access control in Laravel with admin and user roles using middleware"

🔹 ADMIN DASHBOARD

"Create an admin dashboard in Laravel showing total users, products, and orders"

🔹 RELATIONSHIPS

"Create Laravel relationships between User, Product, and Order models"

🔹 VALIDATION

"Add Laravel FormRequest validation for storing and updating products"


🚀 PRO TIP (EXAM STRATEGY)

Start like this:

php artisan make:model Product -mcr
php artisan make:model Order -mcr
php artisan make:model Category -mcr

Then:

php artisan migrate:fresh --seed

You instantly have:
    Models
    Controllers
    Migrations

------------


php artisan migrate:fresh --seed
php artisan migrate



php artisan make:migration create_projects_table
php artisan make:model Project

"als iets van de styling niet goed laat"
npm run build 

npm run dev
    
composer update      
composer install 

"Wanneer de update van uiterlijk niet is doorgekomen"
php artisan view:clear 
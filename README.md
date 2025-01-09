
# InsAIghtful

InsAIghtful is a cutting-edge project designed to bring the power of AI to insightful solutions. This project combines modern tools like Node.js, XAMPP, and Prisma for efficient development and deployment, ensuring a robust and seamless user experience.

---

## 🚀 Features

- **Simple Setup**: Easy-to-follow installation and configuration process.
- **Database Integration**: Seamless database management using Prisma and MySQL.
- **Local Development**: Smooth local server setup via XAMPP and Node.js.
- **Developer-Friendly**: Optimized for development in Visual Studio Code.
- **Real-Time Updates**: Auto-refresh feature for an improved development workflow.

---

## 🛠️ Requirements

Ensure the following software is installed on your machine before proceeding:

1. [Node.js](https://nodejs.org/en)
2. [XAMPP](https://www.apachefriends.org)
3. [Visual Studio Code (VS Code)](https://code.visualstudio.com)

---

## 📦 Installation

### Step 1: Download and Install Required Software

1. Download and install **Node.js** from [nodejs.org](https://nodejs.org/en).
2. Download and install **XAMPP** from [apachefriends.org](https://www.apachefriends.org).
3. Download and install **Visual Studio Code** from [code.visualstudio.com](https://code.visualstudio.com).

---

## 🏃‍♂️ Usage

### Step 2: Start XAMPP Services

1. Open the **XAMPP Control Panel**.
2. Start the **MySQL** service.

### Step 3: Open the Project in VS Code

1. Launch **Visual Studio Code**.
2. Navigate to the project directory.

### Step 4: Open the Terminal in VS Code

1. Press `Ctrl + \`` to open the terminal.
2. Alternatively, open it from the **Terminal** menu.

### Step 5: Execute the Setup Commands

Run the following commands in the terminal, in order:

\`\`\`bash
npm i
npx prisma db push
npm run dev
\`\`\`

### Step 6: Launch the Website

After running the commands, a **localhost link** will appear. Hold `Ctrl` and click the link to open it in your default web browser.

---

## ⚠️ Troubleshooting

- If the database connection fails:
  1. Open your `.env` file in the project directory.
  2. Ensure the `DATABASE_URL` port matches the MySQL port displayed in the **XAMPP Control Panel**.

---

## 🤝 Contributing

We welcome contributions to improve **InsAIghtful**! Here’s how you can help:

1. **Fork the Repository**: Create your own copy of the repository.
2. **Create a New Branch**: Use a descriptive branch name:
   \`\`\`bash
   git checkout -b feature-branch-name
   \`\`\`
3. **Commit Your Changes**: Write clear and concise commit messages:
   \`\`\`bash
   git commit -m "Add feature: description"
   \`\`\`
4. **Push to Your Branch**: Upload your changes:
   \`\`\`bash
   git push origin feature-branch-name
   \`\`\`
5. **Submit a Pull Request**: Describe your changes in detail.

---

## 📄 License

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

## 📧 Contact

For support, feedback, or inquiries, reach out to us:

- **Email**: [ahsanhafeez506@gmail.com](mailto:ahsanhafeez506@gmail.com)
- **GitHub**: [Spiatron](https://github.com/Spiatron)

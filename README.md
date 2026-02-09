# Bitconnect Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Database ORM:** [Prisma](https://www.prisma.io/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (inferred)
- **Validation:** [Zod](https://zod.dev/) & [React Hook Form](https://react-hook-form.com/)

## Getting Started

1.  **Install dependencies:**

    ```bash
    npm install
    ```

2.  **Set up the database:**

    Ensure you have a `.env` file with your `DATABASE_URL`. Then run:

    ```bash
    npx prisma generate
    npx prisma db push
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - learn about utility-first CSS.


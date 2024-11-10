---
title: "Why use pnpm instead of npm"
excerpt: "All of this because I deleted 32GB of duplicated node_modules 😁"
date: "2024-11-10"
tags: ["pnpm", "node"]
lang: "en-US"
---

# Why use pnpm instead of npm to optimize `node_modules`

In recent years, package management in Node.js projects has become increasingly important not only for the proper functioning of the application but also for the efficiency of managing dependencies. While `npm` is the most popular tool, `pnpm` has gained attention as a more efficient and optimized solution, especially when it comes to the `node_modules` folder. In this post, we'll explore the reasons why you should consider using `pnpm` instead of the traditional `npm`.

## 1. **Reduced Disk Space Usage**

One of the biggest benefits of using `pnpm` over `npm` is the significant reduction in disk space occupied by the `node_modules` folder. `pnpm` uses a hard link system to manage dependencies, meaning that instead of duplicating packages in each project, it shares dependencies across different projects. This can lead to considerable space savings, especially in large projects, which can take up hundreds of megabytes or even gigabytes of disk space just with the `node_modules` folder.

With `npm`, each project has its own copies of dependencies, even if they are the same across multiple projects. `pnpm` solves this smartly by creating a centralized repository for dependencies, which avoids duplication and makes the installation process more efficient.

## 2. **Faster Installation Speed**

With `pnpm`, package installations are generally faster compared to `npm`. This happens because `pnpm` uses a global cache that allows it to reuse packages already installed in previous projects. Instead of downloading and installing the same packages every time you run `npm install`, `pnpm` simply checks if the package is available in the global cache and uses it.

Additionally, `pnpm` resolves dependencies more efficiently and parallelizes more installation operations, resulting in faster installations, especially in projects with many dependencies.

## 3. **Consistency Across Dependencies**

`pnpm` ensures that dependencies are always resolved consistently across projects. With `npm`, version issues can sometimes arise, leading to differences in behavior between environments or even installation failures. This can be particularly problematic in CI/CD environments, where consistency is key.

In contrast, `pnpm` creates a more precise `pnpm-lock.yaml` file that ensures dependencies are resolved consistently, regardless of the environment or machine. This helps avoid "it works on my machine" problems and ensures that all developers and servers have the same package versions.

## 4. **Better Performance with Subdependencies**

In Node.js projects with multiple dependencies and subdependencies, `pnpm` can be especially useful. This is because `pnpm` handles the installation of subdependencies more efficiently by creating direct links to shared packages, rather than duplicating them in each subdependency. This results in fewer copies of packages and, consequently, better installation performance.

## 5. **Ease of Use and Compatibility**

Although `pnpm` offers these significant optimizations, it maintains a command-line interface very similar to `npm`, making the transition easy. With commands like `pnpm install` and `pnpm add`, `pnpm` is simple to adopt, and most tools and libraries in the Node.js ecosystem are compatible with it.

## Conclusion

Choosing a package manager is an important decision for any Node.js project. `pnpm` offers clear advantages in terms of efficiency, installation speed, and disk space usage. If you're dealing with large projects, many dependencies or subdependencies, or simply want to optimize package management, `pnpm` is an excellent alternative to `npm`. Additionally, the ease of migration and positive impact on performance make `pnpm` a highly recommended choice for developers looking to improve their development experience.

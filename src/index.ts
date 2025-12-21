#!/usr/bin/env node
import { existsSync } from "node:fs";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as p from "@clack/prompts";
import { defineCommand, runMain } from "citty";
import color from "picocolors";

const subCommands = {
  setup: defineCommand({
    meta: {
      name: "setup",
    },
    async run() {
      const name = "specil setup";

      p.intro(`${color.bgCyan(color.black(` ${name} `))}`);

      const outDirInput = await p.text({
        message: "Where to setup spec files?",
        placeholder: ".",
        defaultValue: ".",
      });

      if (p.isCancel(outDirInput)) {
        p.cancel("Cancelled");
        process.exit(0);
      }

      const s = p.spinner();

      const srcDir = fileURLToPath(
        new URL("./.specil-template", import.meta.url),
      );
      const outDir = path.join(
        path.resolve(process.cwd(), outDirInput),
        ".specil",
      );

      try {
        s.start("Progress");

        await fs.cp(srcDir, outDir, {
          recursive: true,
          force: true,
        });

        s.stop("Done");
      } catch (e) {
        s.stop("Setup failed", 1);
        p.log.error(String(e));
      }
    },
  }),
  run: defineCommand({
    meta: {
      name: "run",
    },
    args: {
      mode: {
        type: "positional",
        description:
          "Mode to run: apply-spec, apply-code, review, deploy, launch",
        required: true,
      },
    },
    async run({ args }) {
      const mode = args.mode as string;

      const commandFilePath = path.join(
        process.cwd(),
        ".specil",
        "_context",
        "_COMMAND.md",
      );

      try {
        if (existsSync(commandFilePath) !== true) {
          p.log.error(
            `${color.yellow(".specil/_context/_COMMAND.md")} not found`,
          );

          return;
        }

        const content = await fs.readFile(commandFilePath, "utf-8");

        const output = `Run command - ${mode}\n\n## Command definition\n\n\`\`\`markdown\n${content}\n\`\`\`\n`;

        process.stdout.write(output);
      } catch (e) {
        p.log.error(String(e));
      }
    },
  }),
};

const main = defineCommand({
  meta: {
    name: "specil",
    description: "Spec-Driven Development CLI tool",
  },
  subCommands,
});

runMain(main);

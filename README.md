# VSCode Stage Selected Bug?

Posted as issue on VSCode's Git Repo

[https://github.com/microsoft/vscode/issues/220541](https://github.com/microsoft/vscode/issues/220541)

Steps to reproduce below

1. Make git repo
2. For the purposes of recreating this issue, I made a simple Vite app with `npm create vite@latest` and followed the prompts but I'm sure this bug would occur regardless. (**b741e89ca0e17baa083a8ca7c3d89ee80ff9d7b3**)
3. Make a file (I made a component called `Foo.tsx` at path `/src/components/Foo.tsx`)
4. Commit this file within VSCode to git (**24cf8662040785c09416671dd64e01aeeba56ffe**)
5. Either within File Explorer or VSCode's Explorer tab, change the `components` folder to `components_old`
6. Commit this change to git. (**1cb1809de2109ea59aee9979ed59679c9ad7c89c**)
7. Not sure if this step is required but make a change to `Foo.tsx`. This can be any change. Commit this change to git. (**37852d2c38825bb26239eb8ff2d2837c720b570a**)
8. Rename `components_old` to `Components` with a capital **C**.
9. Commit the subsequent rename of the folder. (**461b08bcbe8ac8dddad0aba8ac88bafb7becde5d**)
10. Now for the bug, make a change to `Foo.tsx`, now within the `/src/Components` directory
11. Go to VSCode's Source Control tab and click **Stage Block** on (at least) one change. (I commited the incorrect change VSCode staged here: **ea0e11cb1506cf8624cb6dac82a2c57be42513e8**)
12. Observe in the Source Control panel, the same issue described in my OP

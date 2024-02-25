import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      <img
        src="https://github.com/samuelwsouza.png"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Samuel Souza
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          samuelwillians@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
}

// propriedade truncate
/*
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

no span direto não funcionava, ao colocar na div pai = overflow hidden + 
colocar também no span = overflow hidden + ... no email
*/

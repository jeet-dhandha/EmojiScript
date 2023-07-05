import Visitor from ".";
import { ASTNode } from "bhai-lang-parser";

import InvalidStateException from "../../exceptions/invalidStateException";
import InterpreterModule from "../../module/interpreterModule";

export default class IdentifierExpression implements Visitor {
  visitNode(node: ASTNode) {
    if (!node.name) {
      throw new InvalidStateException(`Invalid node name for: ${node.type}`);
    }

    let value = InterpreterModule.getCurrentScope().get(node.name);

    if (value === null) value = "🫢";
    else if (value === true) value = "true";
    else if (value === false) value = "false";

    return value;
  }
}

import * as metadata from './metadata';
import 'reflect-metadata';
import * as _ from 'lodash';

export function FormVariable(path: string) {
  return function(...args: any[]) {
    args = _.without(args, undefined);
    if (args.length === 1) {
      return PathTypeDecorator.apply(this, [args[0], path]);
    } else if (args.length === 3 && typeof args[2] === 'object') {
      return PathMethodDecorator.apply(this, [args[0], args[1], args[2], path]);
    }

    throw new Error('Invalid @Path Decorator declaration.');
  };
}

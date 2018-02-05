export interface UseCase<I, O> {
  execute(request: I): O;
}

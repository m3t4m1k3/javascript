// builder.js

class HotDog {
  constructor(
    public bun: string,
    public sauce: string,
    public mustard: String,
    public onions: String
  )
}

new HotDog('wheat', false, true, false);

// Using the builder pattern
class HotDog {
  constructor(
    public bun: string,
    public sauce?: string,
    public mustard?: String,
    public onions?: String
  )
}

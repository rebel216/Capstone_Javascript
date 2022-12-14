beforeAll(() => {
  document.body.innerHTML = `  
  <div class="container">
            <header>
                <div class="logo">
                    <h1>Logo Page</h1>
                </div>
                <nav class="nav-bar">
                    <ul class="nav-bar-list">
                        <li>Beef</li>
                        <li>Pasta</li>
                        <li>Seafood</li>
                    </ul>
                </nav>
            </header>
            <main class="container-food-cards">
            </main>
            <<footer>
            <h4>&copy; Created by Microverse under CC license</h4>
        </footer>
        </div>
  </div>
  `;
});

const itemCounter = (foodSelected, arr) => {
  foodSelected.innerHTML = `${foodSelected.textContent} (${arr})`;
};

describe('Check counter all item function', () => {
  test('Should be show Beef (42) ', () => {
    const beefCount = document.querySelector('li');
    itemCounter(beefCount, 42);
    expect(beefCount.textContent).toEqual('Beef (42)');
  });
});

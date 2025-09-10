export default function About() {
  return (
    <main className="container py-5">
      <section className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <h1 className="display-5 fw-bold mb-2">About <span className="text-primary">Book Tracker</span></h1>
              <p className="lead text-muted mb-4">
                Book Tracker is a simple, friendly way to organize the books you read, want to read, and love.
                It started as a passion project to help readers stay consistent and discover patterns in their reading habits.
              </p>

              <hr className="my-4" />

              <h2 className="h4 fw-semibold mb-3">Our Mission</h2>
              <p className="mb-4">
                Empower every reader to build a personal library they’re proud of—complete with notes, ratings, and insights—
                while keeping privacy and ease-of-use at the center.
              </p>

              <div className="row g-4 mb-4">
                <div className="col-md-6">
                  <div className="p-3 h-100 border rounded-4">
                    <h3 className="h5 mb-2">What You Can Do</h3>
                    <ul className="mb-0 ps-3">
                      <li>Add books with title, author, genre, and rating</li>
                      <li>Filter and search by genre or status</li>
                      <li>Track progress and revisit reading notes</li>
                      <li>See your streaks and reading stats</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 h-100 border rounded-4">
                    <h3 className="h5 mb-2">What We Value</h3>
                    <ul className="mb-0 ps-3">
                      <li><strong>Simplicity:</strong> Clean, fast, no clutter</li>
                      <li><strong>Ownership:</strong> Your data belongs to you</li>
                      <li><strong>Accessibility:</strong> Works great on mobile & desktop</li>
                      <li><strong>Delight:</strong> Small touches that make reading fun</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="h4 fw-semibold mb-3">Built With</h2>
              <p className="mb-4">
                React on the front end and a simple, secure API on the back end. Styling uses responsive components so your
                library looks great on any screen.
              </p>

             

              <p className="text-muted small mt-4 mb-0">Made with ❤️ by readers, for readers.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

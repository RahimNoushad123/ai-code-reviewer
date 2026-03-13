import subprocess
import tempfile

def analyze_python(code):

    with tempfile.NamedTemporaryFile(delete=False, suffix=".py") as f:
        f.write(code.encode())
        path = f.name

    result = subprocess.run(
    ["python", "-m", "pylint", path],
    capture_output=True,
    text=True
)

    return result.stdout
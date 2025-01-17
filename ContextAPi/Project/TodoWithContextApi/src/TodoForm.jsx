function TodoForm() {
    

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="px-3 py-1 text-white bg-green-600 rounded-r-lg shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


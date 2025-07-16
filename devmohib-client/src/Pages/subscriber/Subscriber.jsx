import useSubscriber from "../../hook/useSubscriber";
import { deleteById } from "../../utils/fetchOne";
import Swal from 'sweetalert2'
const Subscriber = () => {
    const { data: subscriber, isLoading, isPending, refetch } = useSubscriber();
    if (isPending || isLoading) return "Loading...";


    const extractNameFromEmail = (email) => {
        if (!email || !email.includes('@')) return ''; // Validate email
        const namePart = email.split('@')[0];
        return namePart.replace(/[^a-zA-Z]/g, '');
    };

    const handleEdit = async (id) => {
        console.log(' id', id)
    }
    const handleDelete = async (id, email) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: `Delete subscriber with email ${email}?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                const response = await deleteById('delete-subscriber', id);
                if (response?.success) {
                    await Swal.fire({
                        title: 'Deleted!',
                        text: 'Subscriber has been deleted.',
                        icon: 'success',
                    });
                    refetch(); // Refetch data after successful deletion
                } else {
                    await Swal.fire({
                        title: 'Not Found',
                        text: 'No subscriber found with this ID.',
                        icon: 'error',
                    });
                }
            } catch (error) {
                console.error('Error deleting subscriber:', error);
                await Swal.fire({
                    title: 'Error!',
                    text: 'Failed to delete subscriber.',
                    icon: 'error',
                });
            }
        }
    };

    
    return (
        <section>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-center mb-8"> User Listing</h1>
                {/* Search and Add User (Static) */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className="w-full md:w-1/3 mb-4 md:mb-0">
                        <input type="text" placeholder="Search users..." className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500" />
                    </div>
                    <a href="https://abhirajk.vercel.app/" target="blank">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
                            Add New User
                        </button>
                    </a>
                </div>
                {/* User Table */}
                <div className="overflow-x-auto bg-white rounded-lg shadow">
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">ID</th>
                                <th className="py-3 px-6 text-left">Name</th>
                                <th className="py-3 px-6 text-left">Email</th>
                                <th className="py-3 px-6 text-left">Role</th>
                                <th className="py-3 px-6 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-gray-600 text-sm">
                            {subscriber ? (subscriber?.map((user) => (
                                <tr key={user._id} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="py-3 px-6 text-left">{user._id}</td>
                                    <td className="py-3 px-6 text-left">
                                        {extractNameFromEmail(user.email) || 'No name extracted'}
                                    </td>
                                    <td className="py-3 px-6 text-left">{user.email}</td>
                                    <td className="py-3 px-6 text-left">Subscriber</td>
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            <button onClick={() => handleEdit(user._id)} className="w-4 mr-2 transform hover:text-blue-500 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </button>
                                            <button onClick={() => handleDelete(user._id, user.email)} className="w-4 mr-2 transform hover:text-red-500 hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))) : (<p className="h-screen flex items-center justify-center">No Subscriber Yet</p>)}
                        </tbody>
                    </table>
                </div>
                {/* Static Pagination */}
                <div className="flex justify-between items-center mt-6">
                    <div>
                        <span className="text-sm text-gray-700">
                            Showing 1 to 5 of 5 entries
                        </span>
                    </div>
                    <div className="flex space-x-2">
                        <a href="https://abhirajk.vercel.app/" target="blank">
                            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                                Previous
                            </button>
                        </a>
                        <a href="https://abhirajk.vercel.app/" target="blank">
                            <button className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 opacity-50">
                                Next
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscriber;
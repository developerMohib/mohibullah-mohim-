import Swal from "sweetalert2";

export const handleDelete = async (id, option, endpoint ,deleteFunction, refetchFunction)=>{
    const result = await Swal.fire({
    title: 'Are you sure?',
    text: `Delete Your Item with is ${option}?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  });
if(result.isConfirmed){
    try {
      const response = await deleteFunction(endpoint,id);
      if (response?.success) {
        await Swal.fire({
          title: 'Deleted!',
          text: `${option} has been deleted.`,
          icon: 'success',
        });
        refetchFunction?.(); // Optional refetch
        return true; // Return success status
      } else {
        await Swal.fire({
          title: 'Not Found',
          text: `No  ${option} found with this ID.`,
          icon: 'error',
        });
        return false;
      }
    }catch (error) {
      console.error('Error deleting:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to delete.',
        icon: 'error',
      });
      return false;
    }
  }
  return false; 
}

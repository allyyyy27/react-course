namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller{

    // Fetch all users (from the previous step)
    public function index(){
        return response()->json(User::all());
    }

    // Register a new user
    public function userRegistration(Request $request)
    {
        try{

            $validation = $request->validate([
                'firstName'     => 'required|string',
                'middleName'    => 'nullable|string',
                'lastName'      => 'required|string',
                'suffix'        => 'nullable|string',
                'email'         => 'required|email|unique:users,email',
                'userName'      => 'required|string|unique:users,userName',
                'phoneNumber'   => 'required|string|unique:users,phoneNumber',
                'password'      => 'required|string|min:12|confirmed',
            ]);

            $firstName      = $request->firstName;
            $middleName     = $request->middleName;
            $lastName       = $request->lastName;
            $suffix         = $request->suffix;
            $email          = $request->email;
            $userName       = $request->userName;
            $phoneNumber    = $request->phoneNumber;
            $password       = $request->password;

            $parameters = [
                $firstName,
                $middleName,
                $lastName,
                $suffix,
                $email,
                $userName,
                $phoneNumber,
                $password
            ];

            $submit = DB::connection('ally_dev')->selectOne('
                    DECLARE @pintErrNum SMALLINT
                    DECLARE @pstrErrMsg VARCHAR(200)
                    DECLARE @NewUserRecID BIGINT
                    EXEC spUserCredentials ?,?,?,?,?,?,?,?,@pintErrNum OUTPUT, @pstrErrMsg OUTPUT, @NewUserRecID OUTPUT
                    SELECT @pintErrNum AS ErrorNumber, @pstrErrMsg AS ErrorMessage
                ', $parameters
            );

            $result = collect($submit);
            $decoded = json_decode($result);

            return response()->json([
                'errorNumber' => $decoded->ErrorNumber,
                'errorMessage' => $decoded->ErrorMessage
            ]);
        }
        catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

}